import axiosClient from "./axiosClient";

const userApi = {
  getAll() {
    const url = "/users";
    return axiosClient.get(url)
  },
  get(id) {
    const url = `users/${id}`;
    return axiosClient.get(url)
  },
  add(data) {
    const url = "users";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `users/${data.id}`;
    return axiosClient.put(url, data);
  },
  remove(id) {
    const url = `users/${id}`;
    return axiosClient.delete(url);
  }
}

export default userApi