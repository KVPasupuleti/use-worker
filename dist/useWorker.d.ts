import WORKER_STATUS from "./lib/status";
declare type WorkerController = {
    status: WORKER_STATUS;
    kill: Function;
};
export declare enum TRANSFERABLE_TYPE {
    AUTO = "auto",
    NONE = "none"
}
declare type Options = {
    timeout?: number;
    remoteDependencies?: string[];
    autoTerminate?: boolean;
    transferable?: TRANSFERABLE_TYPE;
};
/**
 *
 * @param {Function} fn the function to run with web worker
 * @param {Object} options useWorker option params
 */
export declare const useWorker: <T extends (...fnArgs: any[]) => any>(fn: T, options?: Options) => [(...fnArgs: Parameters<T>) => Promise<ReturnType<T>>, WorkerController, any];
export {};
