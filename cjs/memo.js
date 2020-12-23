'use strict';
const useCallback = fn => useMemo(() => fn);
exports.useCallback = useCallback;

const useMemo = memo => memo();
exports.useMemo = useMemo;
