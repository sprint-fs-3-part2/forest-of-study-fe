const Store = {
  getItem(key: string) {
    if (typeof window !== 'undefined') {
      const response = localStorage.getItem(key);
      return response && JSON.parse(response);
    }
  },
  setItem(key: string, item: any) {
    if (typeof window !== 'undefined') {
      const data = JSON.stringify(item);
      localStorage.setItem(key, data);
    }
  },
};

export default Store;
