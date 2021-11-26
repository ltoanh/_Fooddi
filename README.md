## **FOODDI**

**API:**

src: https://github.com/igdev116/free-food-menus-api
```
https://ig-food-menus.herokuapp.com
```

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
How to use API:
```
GET \bbqs
GET \breads
GET \burgers
GET \chocolates
GET \desserts
GET \drinks
GET \fried-chicken
GET \ice-cream
GET \pizzas
GET \porks
GET \sandwitches
GET \sausages
GET \steaks
GET \best-foods
GET \all-foods
GET \total
GET \categories
```
> best-foods: get all best seller foods
> 
> all-foods: get all of foods
> 
> total: analysis all type of foods
> 
> categories: food category include: name, img_src
