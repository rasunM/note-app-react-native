import { TaskProps } from "./task_types"

export type RootStackParamsList = {
    TaskPage: undefined,
    TaskEditPage: {
        task : TaskProps
    },
}
