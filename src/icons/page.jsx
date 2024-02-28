

import dynamic from "next/dynamic";
const List = dynamic(() => import(`./icons/List`));
const Cards = dynamic(() => import(`./icons/Cards`));

export const icons = {
    List,
    Cards
  };
  
  const AllIcons = ({ name, className = `` }) => {
    const Icon = icons[name];
  
    return <Icon className={className} />;
  };
  
  export default AllIcons;