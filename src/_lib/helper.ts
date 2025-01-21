//缩略字符串，只显示首位和末位
export function abbreviateString(str: string) {
  if (str?.length <= 7 || !str) {
    return str || "";
  }
  return str.slice(0, 4) + "..." + str.slice(-3);
}

const subNumbers = ["₀", "₁", "₂", "₃", "₄", "₅", "₆", "₇", "₈", "₉"];
export const roundPriceWithoutSub = (num: number) => {
  if (num >= 1) {
    return num?.toFixed(2);
  }

  let str = num?.toString() || "0";

  if (str.includes("e")) {
    str = num.toFixed(20);
  }

  const decimalIndex = str.indexOf(".");

  let nonZeroIndex = decimalIndex + 1;
  while (nonZeroIndex < str.length && str[nonZeroIndex] === "0") {
    nonZeroIndex++;
  }
  let result = str.substring(0, decimalIndex);
  const zeroLen = str.substring(decimalIndex, nonZeroIndex);

  if (zeroLen?.length > 3) {
    const arrLen = (zeroLen?.length - 1)?.toString()?.split("");
    let strn = "0.0";
    for (let i = 0; i < arrLen?.length; i++) {
      strn += subNumbers[Number(arrLen[i])];
    }
    result = strn;
  } else {
    result += zeroLen;
  }

  result += str.substring(nonZeroIndex, nonZeroIndex + 4);

  return result;
};

export const formatCurrency = (
  value: number | undefined,
  prefix = "$",
  fixed = 0
) => {
  if (value === undefined || value === 0) return "--";
  if (value >= 1e9) {
    return prefix + (value / 1e9).toFixed(1) + "B";
  } else if (value >= 1e6) {
    return prefix + (value / 1e6).toFixed(1) + "M";
  } else if (value >= 1e3) {
    return prefix + (value / 1e3).toFixed(1) + "K";
  } else if (value < 1) {
    return "0";
  } else {
    return prefix + (fixed ? value.toFixed(fixed) : value.toString());
  }
};
