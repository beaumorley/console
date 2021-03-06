export enum POOL_STATE {
  READY = 'Ready',
  FAILED = 'ReconcileFailed',
}

export enum POOL_PROGRESS {
  CREATED = 'created',
  FAILED = 'failed',
  PROGRESS = 'progress',
  TIMEOUT = 'timeout',
  NOTREADY = 'notReady',
}

export const COMPRESSION_ON = 'aggressive';
export const ROOK_MODEL = 'cephblockpools.ceph.rook.io';
