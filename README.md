Format that will be safed in localStorage:  
```
{
  "page_1": {
    "article_1": true,
    "article_2": true,
    "article_3": false
  },
  "page_2": {
    "article_1": true,
    "article_2": true,
    "article_3": false
  },
  "page_3": {
    "article_1": true,
    "article_2": true,
    "article_3": false
  }
}
```

Every article has an read-status, so the user knows what he has read, and what he didn't.  
On the sidebar:  
In case no article is read, no icon is displayed. In case at least on article is read and this is not the only article, some other icon is displayed. If the user has read everything on this page, an green check-icon is displayed in the sidebar.  

Thats the plan, atleast.

