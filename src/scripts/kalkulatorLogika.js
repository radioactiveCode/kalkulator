export class Calculator
{
    firstOperand = '';
    secondOperand = '';
    operation = '';
    error = false;
    errorMessage = '';

    type(char)
    {
        if (this.operationNotSelected())
        {
            this.firstOperand += char;
        }
        else
        {
            this.secondOperand += char;
        }
    }
    delete()
    {
        if (this.operationNotSelected())
        {
            this.firstOperand = this.firstOperand.substring(0,(this.firstOperand.length-1));
        }
        else
        {
            this.secondOperand = this.secondOperand.substring(0,(this.secondOperand.length-1));
        }
    }
    plus()
    {
        this.addOperation('+');
    }
    minus()
    {
        this.addOperation('-');
    }
    multiply()
    {
        this.addOperation('*');
    }
    divide()
    {
        this.addOperation('/');
    }
    addOperation(operation)
    {
        if ((this.firstOperand !== '') && (this.firstOperand !== '-') && (this.firstOperand[this.firstOperand.length - 1] !== '.'))
        {
            this.calculate();
            this.operation = operation;
        }
    }
    calculate()
    {
        if ((this.secondOperand !== '') && (this.secondOperand !== '-') && (this.secondOperand[this.secondOperand.length - 1] !== '.'))
        {
            this.firstOperand = this.operationResult(this.firstOperand, this.secondOperand).toString();
            this.operation = '';
            this.secondOperand = '';
        }
    }
    operationResult(X, Y)
    {
        X = parseFloat(X);
        Y = parseFloat(Y);
        if (this.operation === '+')
        {
            return X + Y;
        }
        if (this.operation === '-')
        {
            return X - Y;
        }
        if (this.operation === '*')
        {
            return X * Y;
        }
        if (this.operation === '/')
        {
            if (Y === 0)
            {   
                this.error = true;
                this.errorMessage = "Can't divide by 0!";
                return X;
            }
            else
            {
                return X / Y;
            }
        }
    }
    operationNotSelected()
    {
        return this.operation === '';
    }
    text()
    {
        if (this.error)
        {
            this.error = false;
            return this.errorMessage;
        }
        else
        {
            if (this.firstOperand === '')
            {
                this.firstOperand = '0';
                return '0';
            }
            else
            {
                this.firstOperand = this.removeLeadingZero(this.firstOperand);
                this.secondOperand = this.removeLeadingZero(this.secondOperand);
                return this.firstOperand + this.operation + this.secondOperand;
            }
        }
    }
    removeLeadingZero(operand)
    {
        if (operand.startsWith('-'))
        {
            return '-' + this.removeLeadingZero(operand.slice(1));
        }
        return  operand.replace(/^(0+)(?!\.|$)/, '');
    }
    insertComma()
    {
        if (this.operationNotSelected())
        {
            if (!this.firstOperand.includes('.'))
            {
                if ((this.firstOperand === '') || (this.firstOperand === '-'))
                {
                    this.firstOperand += '0.'
                }
                else
                {
                    this.firstOperand += '.';
                }
            }
        }
        else
        {
            if (!this.secondOperand.includes('.'))
            {
                if ((this.secondOperand === '') || (this.secondOperand === '-'))
                {
                    this.secondOperand += '0.'
                }
                else
                {
                    this.secondOperand += '.';
                }
            }
        }
    }
    insertMinus()
    {
        if (this.operationNotSelected())
        {
            if (!this.firstOperand.includes('-'))
            {
                this.firstOperand = '-' + this.firstOperand;
            }
        }
        else
        {
            if (!this.secondOperand.includes('-'))
            {
                this.secondOperand = '-' + this.secondOperand;
            }
        }
    }
    clear()
    {
        this.firstOperand = '';
        this.secondOperand = '';
        this.operation = '';
        this.error = false;
        this.errorMessage = '';
    }
}