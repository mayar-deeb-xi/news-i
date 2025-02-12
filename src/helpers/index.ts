export const getPageTitle = (pathname:string)=>{

    if(pathname.includes('/tasks/create')) return 'New Task'
    if(pathname.includes('/tasks/update')) return 'Edit Task'

    return ''
}