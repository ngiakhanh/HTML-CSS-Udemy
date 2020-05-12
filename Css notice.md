# CSS Notice

## :visited have limit css properties (can not change size/apply animation - <https://developer.mozilla.org/en-US/docs/Web/CSS/Privacy_and_the_:visited_selector)>

## State

- :link/:visited
- :hover
- :focus
- :active

### Quy tắc: :link/:visited thấp nhất, :active cao nhất

### Khi xuất hiện 2 state :hover và :focus, độ ưu tiên sẽ theo thứ tự trong css -> nguyên nhân hay gộp hover và focus lại để tạo nên consistency OR bỏ state :focus

### :visited sẽ nhảy vào thay thế :link ngay sau :active state kết thúc lần đầu

### Transition ở state A chỉ tác dụng khi effect vào state A, không có tác dụng khi effect từ state A đến state tiếp theo

## Transform: scale cho purpose animation: khi back về set scale(1.03) thay vì 1.0

## Background-image: thêm hiệu ứng phủ 1 lớp đen mờ
### background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(img/hero.jpg);

### OR: background-color: black cho element mẹ; set opacity < 1 cho element con.

## Quoting: <https://css-tricks.com/quoting-in-html-quotations-citations-and-blockquotes/>

## Overflow và float: left (tránh dùng)
### Trước khi float phải chỉnh width cho element A (và element B).
### Khi float: left element A, element B sẽ tự nhảy lên kế bên phải vs content tràn qua bên element A (overflow) và sẽ chiếm hết phần còn lại với điều kiện không set width cho element B.

### Lúc này display sẽ bị set thành block cho element A.

### Nếu set width cho element B nó sẽ ko tự nhảy, phải force nó bằng cách thêm vào float: left. Nếu đủ chỗ hay dư, lúc này nó mới nhảy.

### Nhớ canh đủ margin cho element mẹ của A và B.

### dùng float xong phải gọi .clearfix cho element mẹ.

## Diplay: inline-block
### Set cho cả A và B.
### Nếu content element B (width B) dài hơn khoảng trống element A còn lại, sẽ xuống dòng.

### Phải set width B cho phù hợp.

### Sẽ có khoảng space khoảng 4px giữa các li trong 1 ul và giữa các ul với nhau: set margin-right: -4px; margin-bottom: -4px;
<https://css-tricks.com/fighting-the-space-between-inline-block-elements>

## Display: flex ???