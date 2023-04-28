import { REQUEST_BOARD_LIST_TO_SPRING } from "./mutation-types";

import axiosInst from "@/utility/axiosInst";

export default {
  requestBoardListToSpring({ commit }) {
    return axiosInst.get("/list").then((res) => {
      commit(REQUEST_BOARD_LIST_TO_SPRING, res.data);
    });
  },
  requestBoardToSpring({ commit }, boardId) {
    return axiosInst.get(`/jpa-board/${boardId}`).then((res) => {
      commit(REQUEST_BOARD_TO_SPRING, res.data);
    });
  },
};
