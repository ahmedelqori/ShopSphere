import { useTranslation } from "react-i18next";
import { Ul, Li } from "./ListCategory.styled";
import { Link } from "react-router-dom";

const ListCategory = () => {
  const [Content, _] = useTranslation("header");
  const listOfCategories = [
    Content("categories.laptop"),
    Content("categories.computer"),
    Content("categories.smartPhone"),
    Content("categories.mobile"),
    Content("categories.console"),
    Content("categories.camera"),
    Content("categories.tv"),
    Content("categories.watchs"),
    Content("categories.gps"),
    Content("categories.warable"),
  ];
  return (
    <Ul>
      {listOfCategories.map((element, index) => (
        <Li key={index}>
          <Link to="/categories">{element}</Link>
        </Li>
      ))}
    </Ul>
  );
};

export default ListCategory;
