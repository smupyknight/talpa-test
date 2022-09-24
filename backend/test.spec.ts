const request = require('supertest');

describe('Graphql endpoint testing', () => {
  it('It should return machines query properly', async () => {
    const response = await request('http://localhost:1337/graphql').post('/').send({
      operationName: 'Query',
      query:
        'query Query {\n  machines {\n    name\n    lastKnownPosition {\n      lat\n      long\n      __typename\n    }\n    __typename\n  }\n}',
      variables: {},
    });
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual({
      data: {
        machines: [
          {
            name: 'm1',
            lastKnownPosition: { lat: '0.125', long: '0.125', __typename: 'GPSPosition' },
            __typename: 'Machine',
          },
          {
            name: 'm2',
            lastKnownPosition: { lat: '1.25', long: '1.25', __typename: 'GPSPosition' },
            __typename: 'Machine',
          },
          {
            name: 'm3',
            lastKnownPosition: { lat: '2.5', long: '2.5', __typename: 'GPSPosition' },
            __typename: 'Machine',
          },
        ],
      },
    });
  });
  it('It should return machine query properly', async () => {
    const response = await request('http://localhost:1337/graphql')
      .post('/')
      .send({
        query:
          'query ($where: MachineWhereUniqInput!) {\n  machine(where: $where) {\n    name\n    sensors {\n      name\n      __typename\n    }\n    __typename\n  }\n}',
        variables: { where: { name: 'm1' } },
      });
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual({
      data: {
        machine: {
          name: 'm1',
          sensors: [
            { name: 'sensor 1', __typename: 'Sensor' },
            {
              name: 'sensor 2',
              __typename: 'Sensor',
            },
            { name: 'sensor 3', __typename: 'Sensor' },
          ],
          __typename: 'Machine',
        },
      },
    });
  });
  it('It should return machines query properly', async () => {
    const response = await request('http://localhost:1337/graphql')
      .post('/')
      .send({
        query:
          'query ($from: DateTime!, $name: String!, $to: DateTime!, $sname: String!) {\n  sensorData(from: $from, name: $name, to: $to, sname: $sname) {\n    value\n    timestamp\n    __typename\n  }\n}',
        variables: { from: '1994-01-01T00:00:00.000Z', name: 'm1', to: '2023-01-01T00:00:00.000Z', sname: 'sensor 1' },
      });
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual({
      data: {
        sensorData: [
          {
            value: 0,
            timestamp: '2022-09-01T07:07:19.174Z',
            __typename: 'SensorDataPoint',
          },
          { value: 1, timestamp: '2022-09-02T07:07:19.174Z', __typename: 'SensorDataPoint' },
          {
            value: 2,
            timestamp: '2022-09-03T07:07:19.174Z',
            __typename: 'SensorDataPoint',
          },
          { value: 3, timestamp: '2022-09-04T07:07:19.174Z', __typename: 'SensorDataPoint' },
          {
            value: 4,
            timestamp: '2022-09-05T07:07:19.174Z',
            __typename: 'SensorDataPoint',
          },
        ],
      },
    });
  });
});
