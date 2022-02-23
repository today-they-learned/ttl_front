function handleTagsStyle() {
  const tags = document.querySelectorAll('.tag_list');

  const tagLenArr = [];

  tags.forEach((tag) => {
    const tagChildren = tag.childNodes;
    let tagWidth = 0;
    let tagLen = 0;
    tagChildren.forEach((child) => {
      if (tagWidth + child.offsetWidth > 250) {
        return;
      }
      tagWidth += child.offsetWidth + 8;
      tagLen += 1;
    });
    tagLenArr.push(tagLen);
  });
  return tagLenArr;
}

export default handleTagsStyle;
