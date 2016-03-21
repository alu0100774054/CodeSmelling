var expect=chai.expect;describe("Medida",function(){describe("Constructor de la clase Medida",function(){it("Debería tener un Constructor",function(){var e=new Medida(1,"f");expect(e.valor).to.equal(1)}),it("Deberia poder recibir un solo parametro",function(){var e=new Medida("23e-1 c");expect(e.valor).to.equal(2.3),expect(e.tipo).to.equal("c")})}),describe("funcion match",function(){it("debería cazar bien",function(){var e=Medida.match("1e-1 f to c");expect(parseFloat(e.val)).to.equal(.1),expect(e.tip).to.equal("f"),expect(e.para).to.equal("c")})}),describe("funcion convertir",function(){it("deberia convertir correctamente",function(){var e=Medida.convertir("1e-1 f to c");expect(e).to.equal("-17.72 Celsius")})})}),describe("Clase Temperatura",function(){describe("constructor temperatura",function(){it("deberia tener un constructor",function(){var e=new Temperatura(10,"c");expect(e.valor).to.equal(10)}),it("deberia poder recibir un solo parametro",function(){var e=new Temperatura("10 c");expect(e.valor).to.equal(10),expect(e.tipo).to.equal("c")})}),describe("Clase Fahrenheit",function(){describe("constructor fahrenheit",function(){it("deberia tener un constructor",function(){var e=new Fahrenheit(1);expect(e.valor).to.equal(1)})})}),describe("funciones de fahrenheit",function(){it("debe convertir a celsius",function(){var e=new Fahrenheit(32);expect(e.toCelsius()).to.equal(0)}),it("debe convertir a kelvin",function(){var e=new Fahrenheit(5);expect(e.toKelvin()).to.equal(258.15)})})}),describe("Clase Celsius",function(){describe("constructor celsius",function(){it("deberia tener un constructor",function(){var e=new Celsius(32);expect(e.valor).to.equal(32)})}),describe("funciones de celsius",function(){it("debe convertir a fahrenheit",function(){var e=new Celsius(0);expect(e.toFahrenheit()).to.equal(32)}),it("debe convertir a kelvin",function(){var e=new Celsius(0);expect(e.toKelvin()).to.equal(273.15)})})}),describe("Clase Kelvin",function(){describe("constructor kelvin",function(){it("deberia tener un constructor",function(){var e=new Kelvin(88);expect(e.valor).to.equal(88)})}),describe("funciones de kelvin",function(){it("debe convertir a celsius",function(){var e=new Kelvin(88);expect(parseFloat(e.toCelsius().toFixed(2))).to.equal(-185.15)}),it("debe convertir a fahrenheit",function(){var e=new Kelvin(88);expect(parseFloat(e.toFahrenheit().toFixed(2))).to.equal(-301.27)})})});