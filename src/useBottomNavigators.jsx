import { data } from './data/site-data'

export const useBottomNavigators = (pathname) => {
    pathname = pathname.length > 1 ? 
               pathname.slice(1) : 
               pathname
    let next = null
    let prev = null
    let isCurrentPagePathname = false
    data.navigation.forEach((nav, index, array) => {
        if(nav.path === pathname){
        isCurrentPagePathname = true
        if(array[index - 1]) prev = array[index - 1].path
        }
        if(isCurrentPagePathname && nav.path !== pathname){
        next = nav.path
        isCurrentPagePathname = false
        }
    })
    return {next, prev}
}