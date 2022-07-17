import React from 'react';
import { styled } from '../../stitches.config';

export interface TypographyProps {
    as?: string;
    variant?: string;
    fontWeight?: string;
    lineHeight?: string;
    letterSpacing?: string;
    fontSize?: string;
}

export const Typography: React.FC<TypographyProps> = ({
    as = 'p', 
    variant, 
    fontWeight, 
    lineHeight, 
    letterSpacing,
    fontSize,
    ...props
}) => {
    let styledProps: Record<string, unknown> = {};

    if (variant) {
        const varName = `$${variant}`;
        styledProps = {
            fontWeight: varName,
            lineHeight: varName,
            letterSpacing: varName,
            fontSize: varName
        }
    }

    if (fontWeight) {
        styledProps.fontWeight = `$${fontWeight}`;
    }

    if (lineHeight) {
        styledProps.lineHeight = `$${lineHeight}`;
    }
    
    if (letterSpacing) {
        styledProps.letterSpacing = `$${letterSpacing}`;
    }

    if (fontSize) {
        styledProps.fontSize = `$${fontSize}`;
    }

    const Text = styled(as, styledProps);

    return (<Text {...props} />);
}