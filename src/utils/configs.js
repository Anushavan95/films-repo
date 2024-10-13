import { GenresIcon, HomeIcon, MoviesIcon, SearchIcon, TVShowsIcon, WatchLaterIcon } from "../assets";
export const navbarMenuTabs = [
    { icon: SearchIcon, label: "Search" },
    { icon: HomeIcon, label: "Home" },
    { icon: TVShowsIcon, label: "TV Shows" },
    { icon: MoviesIcon, label: "Movies" },
    { icon: GenresIcon, label: "Genres" },
    { icon: WatchLaterIcon, label: "Watch Later" }
];
export const convertSeconds = (seconds) => {
    const hours = Math.floor(Number(seconds) / 3600);
    const minutes = Math.floor((Number(seconds) % 3600) / 60);
    return { hours, minutes };
};
