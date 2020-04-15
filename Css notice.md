# CSS Notice

## :visited have limit css properties (can not change size/apply animation - <https://developer.mozilla.org/en-US/docs/Web/CSS/Privacy_and_the_:visited_selector)>

## State

- :link/:visited
- :hover
- :focus
- :active

## Quy tắc: :link/:visited thấp nhất, :active cao nhất

## Khi xuất hiện 2 state :hover và :focus, độ ưu tiên sẽ theo thứ tự trong css -> nguyên nhân hay gộp hover và focus lại để tạo nên consistency OR bỏ state :focus

## :visited sẽ nhảy vào thay thế :link ngay sau :active state kết thúc lần đầu

## Transition ở state A chỉ tác dụng khi effect vào state A, không có tác dụng khi effect từ state A đến state tiếp theo
