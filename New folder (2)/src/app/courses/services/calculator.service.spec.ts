import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";
import { TestBed } from '@angular/core/testing';

describe('CalculatorService', () => {


    let calculator: CalculatorService;
    let loggerSpy: any;
    beforeEach(() => {
        loggerSpy = jasmine.createSpyObj('Logger', ['log']);

        //  loggerSpy.log.and.returnValue("thihs is a value");

        //esto es para in simular una inyeccion de verdad, para trabajar directamente con la instancia de X
        //hace literalmente una dependency Inyection
        TestBed.configureTestingModule({
            providers: [
                CalculatorService,
                { provide: LoggerService, useValue: loggerSpy }
            ]
        })

        //calculator = new CalculatorService(loggerSpy);

        calculator = TestBed.get(CalculatorService);
    })

    it('should add two number', () => {
        //esto es para que sepa que no hay test
        // pending();
        //const logger = new LoggerService();

        //esta sisntaxisd es para crear una depedencia falsa para testear EXCLUSIVAMENTE el servicio que se esta revisando
        // const logger = jasmine.createSpyObj('Logger', ['log']);

        // logger.log.and.returnValue("thihs is a value");

        //con SpyOn agarra la instancia original y cambia los metodos dentro del string
        //spyOn(logger, 'log');

        //esto rompe una vez que logger existe ya que al final estamos buscando la instancia logger y no una nueva
        //const calculator = new CalculatorService(new LoggerService());

        //const calculator = new CalculatorService(logger);

        const result = calculator.add(2, 2);
        // metodo de jasmine que marca el qeu se espera de X 
        expect(result).toBe(4);

       expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    })

    it('should substract two number', () => {
        //esto es para que el test falle 
        //fail();
        // const logger = jasmine.createSpyObj('Logger', ['log']);

        // const calculator = new CalculatorService(logger);

        const result = calculator.subtract(3, 1);
        // metodo de jasmine que marca el qeu se espera de X 
        expect(result).toBe(2, "unexpected substraction result");
        //pending();
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);

    })



})