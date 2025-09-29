export declare function createServer(root?: string, isProd?: boolean, hmrPort?: number): Promise<{
    app: import("express-serve-static-core").Express;
    vite: any;
}>;
declare const _default: (req: any, res: any) => Promise<any>;
export default _default;
