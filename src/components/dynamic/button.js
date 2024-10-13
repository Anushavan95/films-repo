import { jsxs as _jsxs } from "react/jsx-runtime";
const Button = ({ label, onClick, disabled = false, style, icon }) => {
    return (_jsxs("button", { onClick: onClick, disabled: disabled, style: { padding: '10px 20px', cursor: 'pointer', ...style }, className: disabled ? 'disabled' : '', children: [icon, label] }));
};
export default Button;
