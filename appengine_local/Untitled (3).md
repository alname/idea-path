---
layout: "default"
key_id: "/_note/home"
title: "template"
createtime: 2015-04-12T02:04:23.605000
updatetime: 2020-06-07T03:15:56.403000
author: 
  name: 
---
<h1>概要</h1>
<p>ここはノートのページです</p>
<h1>7日間の更新</h1>
<h3>{{ now|datetimeformat("%Y-%m-%d %H:%M") }}+0900(JST) 更新</h3>
<table>
<thead><tr><th>date</th><th>title</th></tr></thead>
<tbody>
{% for q in query %}<tr><td>{{ q.updatetime|datetimeformat }}</td><td><a href="{{ q.key.id() }}">{{ q.title }}</a></td></tr>
{% endfor %}
</tbody>
</table>