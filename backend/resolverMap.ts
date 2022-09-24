import { data } from './data';

const resolverMap: any = {
  Query: {
    machine(_: any, { where }: any) {
      return data.find((mach) => {
        return where.name === mach.name;
      });
    },
    machines() {
      return data;
    },
    sensorData (_: any, { from, name, to, sensors }: any ) {
      const res = data.find((mach) => mach.name === name)?.sensors.map((sensor) =>{
        return sensor.data.filter((data) => 
          new Date(data.timestamp as string).getTime() >= new Date(from as string).getTime() 
          && new Date(data.timestamp as string).getTime() <= new Date(to as string).getTime() 
        )
      })
      return [].concat.apply([], res as any)
    },
  },
};

export default resolverMap;
