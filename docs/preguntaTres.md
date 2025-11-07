## 1. Borrar individualmente un producto

#### Primero, cada producto tiene un id único:

```
{
  id: uuid.v4(), // id único
  name: "Producto 1",
  price: 20,
  category: "Split",
  checked: false,
  deleted: false,
}
```

#### Luego, en la tarjeta del producto (CardProduct), agregamos un botón de eliminar que llama a una función onDelete:

```
{showDeleteButton && (
  <TouchableOpacity
    style={styles.deleteButton}
    onPress={onDelete} // aquí llamamos a la función
    activeOpacity={0.7}
  >
    <Text style={styles.textDelete}>X</Text>
  </TouchableOpacity>
)}
```

#### En el componente principal (App.tsx), definimos la función que elimina un producto filtrando la lista por id:

```
const handleDeleteProduct = (id: string | number) => {
  setListProducts(prev => prev.filter(product => product.id !== id));
};
```

```
Qué hace esto: recorre la lista de productos y crea una nueva lista sin el producto cuyo id coincide. React actualiza la pantalla y desaparece automáticamente de la lista.
```

## 2. Marcar un producto como obtenido

#### Cada producto tiene la propiedad checked que indica si está marcado o no:

```
checked: false
```

#### En la tarjeta, tenemos un botón que alterna el estado:

```
<TouchableOpacity
  style={[
    styles.checkButton,
    checked && { styles.buttonOK },
  ]}
  onPress={onToggleCheck} // función que alterna el estado
>
  <Text
    style={[
      styles.textCheck,
      checked && { styles.buttonTextOK },
    ]}
  >
    {checked ? "OK" : "X"}
  </Text>
</TouchableOpacity>
```

#### La función que cambia el estado está en App.tsx:

```
const handleToggleCheck = (id: string | number) => {
  setListProducts(prev =>
    prev.map(product =>
      product.id === id ? { ...product, checked: !product.checked } : product
    )
  );
};
```

```
Qué hace esto: recorre la lista de productos y, solo para el que coincide con el id, cambia checked a true o false. El botón cambia de color y de texto según el estado.
```

[<- Volver al inicio](../README.md)
