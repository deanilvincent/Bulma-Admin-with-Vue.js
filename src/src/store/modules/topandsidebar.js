const state = {
    isOpenAndCloseSidebar: false
}

const mutations = {
    openAndCloseSideBar(state, payload) {
        state.isOpenAndCloseSidebar = payload.isOpenAndCloseSidebar;
    }
}

const actions = {
    openAndCloseSideBar: ({
        commit
    }, payload) => {
        commit("openAndCloseSideBar", payload)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}