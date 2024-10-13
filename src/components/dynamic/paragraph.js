import { jsx as _jsx } from "react/jsx-runtime";
const DynamicText = ({ text, component: Component = 'p', style, className, id, }) => {
    return (_jsx(Component, { style: style, className: className, id: id, children: text }));
};
export default DynamicText;
