# oculus
Render repeating templates using HTML data-* attribute.

```html
<table>
    <thead>
        <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
        </tr>
    </thead>
    <tbody data-oculus="demo1"></tbody>
</table>


<script src="../dist/oculus.js"></script>

<script>
    var demo1Data = [...];
    var demo1 = oculus.create({
        name: 'demo1',
        data: demo1Data,
        template: '<tr><td>{firstName}</td><td>{lastName}</td><td>{email}</td></tr>'
    });
    demo1.render();
</script>
```
