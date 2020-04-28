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

## Overflow và float: left (tránh dùng)
### Trước khi float phải chỉnh width cho element A (và element B).
### Khi float: left element A, element B sẽ tự nhảy lên kế bên phải vs content tràn qua bên element A (overflow) và sẽ chiếm hết phần còn lại với điều kiện không set width cho element B.

### Lúc này display sẽ bị set thành block cho element A.

### Nếu set width cho element B nó sẽ ko tự nhảy, phải force nó bằng cách thêm vào float: left. Nếu đủ chỗ hay dư, lúc này nó mới nhảy.

### Nhớ canh đủ margin cho element mẹ của A và B.

## Diplay: inline-block
### Nếu content element B dài hơn khoảng trống element A còn lại, sẽ xuống dòng.

## Display: flex ???