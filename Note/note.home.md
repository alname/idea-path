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
