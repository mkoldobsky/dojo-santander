## 01 - Bank Account

Tomado prestado de [aqui](https://github.com/sandromancuso/Bank-kata)

### Requerimientos

- Depósitos y Extracciones
- Transferencias entre cuentas
- Movimientos de la cuenta (fecha, monto y balance)
- Resumen de cuenta
- Resumen de cuenta filtrado (solo depósitos, solo extracciones, por fecha)

### Reglas

1. Solo un nivel de identación
2. No usar ELSE
3. Encapsular todos los primitivos y strings
4. First class collections
5. Un solo punto por linea
6. No abreviar
7. Todas las entidades con menos de 50 lineas
8. Clases con hasta 2 variables
9. Sin getters / setters / propiedades publicas

Podemos usar este doc de [Object Calisthenics](http://www.cs.helsinki.fi/u/luontola/tdd-2009/ext/ObjectCalisthenics.pdf) de referencia


### Guía Dojo #1

Test propuestos

1. Puedo crear una instancia de cuenta
2. Cuando la cuenta se crea su saldo está en cero
3. Puedo crear un depósito con fecha de hoy de 10 pesos
4. Si hago un depósito de 10 pesos en la cuenta, el saldo queda en 10 
5. Si hago dos depósitos de 10 y 20 pesos el saldo queda en 30

### Guís Dojo # 2

A partir de la solución del dojo del primer día sumarle los siguientes requerimientos

1. Realizar extracciones 
2. Realizar transferencias entre 2 cuentas
3. La cuenta tiene registro de los movimientos


### Guís Dojo #3

Apartir de la solución del segundo día sumar los requerimeintos

1. Generar resumen vacío (consta de un encabezado) para impresora
2. Generar resumen completo para impresora
3. Generar resumen para la web


### Extras 

1. Filtrar los resúmenes

