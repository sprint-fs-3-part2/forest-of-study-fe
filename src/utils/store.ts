const Store = {
  getItem(key: string) {
    const response = localStorage.getItem(key);
    return response && JSON.parse(response);
  },
  setItem(key: string, item: any) {
    const data = JSON.stringify(item);
    localStorage.setItem(key, data);
  },
};

export default Store;
