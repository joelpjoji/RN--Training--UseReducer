const getData = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
      );
      const json = await response.json();
      setData(json);
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
export default getData(props);