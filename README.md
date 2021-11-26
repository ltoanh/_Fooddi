## **FOODDI**

**API: **
src: https://github.com/igdev116/free-food-menus-api

- pagination:
use _page and _limit
```
GET /posts?_page=2
GET /posts?_page=2&_limit=10
```
- sort:
use _sort and _order (asc order by default)
```
GET /posts?_sort=views&_order=asc
GET /posts/1/comments?_sort=votes&_order=asc
```
For multiple fields, use the following format:
```
GET /posts?_sort=user,views&_order=desc,asc
```