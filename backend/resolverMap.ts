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
    sensorData(_: any, { from, name, to, sname }: any) {
      const res = data.find((mach) => mach.name === name)?.sensors.find((sensor) => sensor.name === sname)?.data;
      return res;
    },
  },
};

export default resolverMap;
