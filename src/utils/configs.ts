import { GenresIcon, HomeIcon, MoviesIcon, SearchIcon, TVShowsIcon, WatchLaterIcon } from "../assets";
import { NavbarMenuTab } from "./types";


export const navbarMenuTabs: NavbarMenuTab[] = [
    {icon:SearchIcon, label: "Search"},
    {icon:HomeIcon, label: "Home"},
    {icon:TVShowsIcon, label: "TV Shows"},
    {icon:MoviesIcon, label: "Movies"},
    {icon:GenresIcon, label: "Genres"},
    {icon:WatchLaterIcon, label: "Watch Later"}

]

export const convertSeconds =(seconds: string)=>{
  const hours = Math.floor(Number(seconds) / 3600); 
  const minutes = Math.floor((Number(seconds) % 3600) / 60); 
  return { hours, minutes }; 
}
