export default {
    setCurrentProject(state, payload) {
        state.currentProject = state.projects.find(project => project.name.toLowerCase().replaceAll(' ', '') === payload.name.toLowerCase().replaceAll(' ', ''));
    }
}