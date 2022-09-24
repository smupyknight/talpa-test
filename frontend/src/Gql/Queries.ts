import gql from "graphql-tag";

const GETALLMACHINES = gql`
    query Query {
        machines {
            name
            lastKnownPosition {
                lat
                long
            }
        }
    }
`

const GETMACHINE = gql`
    query ($where: MachineWhereUniqInput!) {
        machine(where: $where) {
            name
            sensors {
                name
            }
        }
    }
`

const GETSENSORDATA = gql`
    query ($from: DateTime!, $name: String!, $to: DateTime!, $sname: String!) {
        sensorData(from: $from, name: $name, to: $to, sname: $sname) {
            value
            timestamp
        }
    }
`

export { GETALLMACHINES, GETMACHINE, GETSENSORDATA }
