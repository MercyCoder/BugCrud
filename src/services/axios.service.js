import http from "../http-common";

class BugsDataService {
  getAll() {
    console.log("response")
    return http.get("/Bugs");
  }

  get(id) {
    return http.get(`/Bugs/${id}`);
  }

  create(data) {
    return http.post("/Bugs", data);
  }

  update(id, data) {
    return http.put(`/Bugs/${id}`, data);
  }

  delete(id) {
    return http.delete(`/Bugs/${id}`);
  }

  deleteAll() {
    return http.delete(`/Bugs`);
  }

  findByTitle(title) {
    return http.get(`/Bugs?title=${title}`);
  }
}

export default new BugsDataService();