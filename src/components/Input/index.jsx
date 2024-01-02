import _omit from 'lodash-es/omit';

export default function Input(props) {
    const {
        prefixElement,
        suffixElement,
        className
    } = props;
    const inputProps = _omit(props, ['className', 'prefixElement', 'suffixElement']);
    return <div data-testid="input-wrapper" className={className ? className : ''}>
        {
            prefixElement ? prefixElement : null
        }
        <input {...inputProps} />
        {
            suffixElement ? suffixElement : null
        }
    </div>
}