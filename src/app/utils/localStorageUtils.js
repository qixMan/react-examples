//add
export function get() {
    return localStorage.todoApp ? JSON.parse(localStorage.todoApp) : ''; 
}

export function save(str) {
    localStorage.todoApp = str;
}