export const array2cluster = (container, keys) =>
  container.reduce((pre, cur) => {
    const key = keys.map(key => cur[key]).join('_');
    !pre[key] && (pre[key] = []);

    pre[key].push(cur);

    return pre;
}, {});


export const array2clusterFlat = (container, keys) =>
  container.reduce((pre, cur) => {
    const key = keys.map(key => cur[key]).join('_');
    pre[key] = cur;

    return pre;
}, {});