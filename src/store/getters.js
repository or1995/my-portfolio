export default {
    allProjects(state) {
        return state.projects
    },
    homeProjects(state) {
        return state.projects.filter(project => project.home);
    },
    currentProject(state) {
        return state.currentProject;
    }
}