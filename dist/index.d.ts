import * as THREE from "three";
declare type Progress = ((request: ProgressEvent) => void) | undefined;
declare type Load = ((result: THREE.BufferGeometry) => void) | undefined;
declare type Error = ((event: ErrorEvent) => void) | undefined;
declare class PlyLoader {
    manager: THREE.LoadingManager;
    propertyNameMapping: any;
    constructor(manager?: THREE.LoadingManager);
    load: (url: string, onLoad: Load, onProgress: Progress, onError: Error) => void;
    setPropertyNameMapping: (mapping: any) => void;
    parse: (data: string | ArrayBuffer) => THREE.BufferGeometry;
}
export default PlyLoader;
