var BASE_URL = "/api";

export default {
  PAGESIZE : 5,

  FETCH : BASE_URL + "/contacts",
  FETCH_ONE : BASE_URL + "/contacts/${no}",
  ADD : BASE_URL + "/contacts",
  UPDATE : BASE_URL + "/contacts/${no}",
  DELETE : BASE_URL + "/contacts/${no}"
}
