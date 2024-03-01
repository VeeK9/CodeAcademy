const ListItem = ({social}) => {
  return (
    <li>
      <a href={social.url} target="_blank">
        <i
          className={social.class}
        />
      </a>
    </li>
  );
}
 
export default ListItem;