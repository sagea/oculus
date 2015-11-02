# oculus
Render repeating templates using HTML data-* attribute.

```html
<table>
    <thead>
        <tr>
            <td>#</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
        </tr>
    </thead>
    <tbody data-oculus="demo1">
    </tbody>
</table>

<script src="../dist/oculus.js"></script>

<script>
    // Fake Data generated by Mackaroo
    var demoData = [{
        "name": {
            "first": "Janice",
            "last": "Bell"
        },
        "email": "jbell0@bluehost.com"
    }];

    // Demo 1
    var demo1 = oculus.Create({
        name: 'demo1',
        data: demoData,
        template: '<tr><td>{$index}</td><td>{name.first}</td><td>{name.last}</td><td>{email}</td></tr>'
    });
    demo1.render();
</script>
```
