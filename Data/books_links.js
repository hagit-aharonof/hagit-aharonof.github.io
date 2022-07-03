const books_links = {
    "101.5": "https://drive.google.com/file/d/17FvLqWiLliDzjT5Lv3mE1Le4WTbfqLaF/preview",
    "102.5": "https://drive.google.com/file/d/1kY01lrxEULikf2XGt08yMApqZCD_kFKB/preview",
    "102": "https://drive.google.com/file/d/1BLTk_7qvQrpA14uKmqihDx00EI7L3vd4/preview",
    "103": "https://drive.google.com/file/d/1UfAzqDMqCSHzpMFw6QeqqTXd77cRJqgT/preview",
    "105.5": "https://drive.google.com/file/d/1Ajr191UGhtw98Eq1ZdBI5_bTO74qo-Bg/preview",
    "105.8": "https://drive.google.com/file/d/1gP-MyaWu3BHqfiYnHhtSBBXLHi__ONyM/preview",
    "105": "https://drive.google.com/file/d/1SnWsZaqNwKEp75WQQthS2BF5zk_vBFA4/preview",
    "106": "https://drive.google.com/file/d/1oVA589bbdPH53oUtvKv4X6yWejBfuHzT/preview",
    "107": "https://drive.google.com/file/d/15qJFcZil1PGKpZIUq7MTHwJm8z8IqfTB/preview",
    "108": "https://drive.google.com/file/d/1I4gmndviUa9dFaLZccd9iaUFhwy4S2-m/preview",
    "109": "https://drive.google.com/file/d/1qAYliwGUt_i2WTspwqhm8tWuDXSRnQiH/preview",
    "110": "https://drive.google.com/file/d/1LIK3lEQ_zpSMSd-AqDoQG3SmVHrwPu6u/preview",
    "112": "https://drive.google.com/file/d/1oPW272LfRAq2m09boZeZL04xRcw_r4sx/preview",
    "113": "https://drive.google.com/file/d/1lEbfgqNEMQKwn42xyZxPjn6eMbwuGFV3/preview",
    "114": "https://drive.google.com/file/d/17zZErJj-kC_ETgqNfXZoBlVFf8Qc_jry/preview",
    "115": "https://drive.google.com/file/d/1FnaxgRvmrJsre3a2O95w4M8B9xzLA0Ox/preview",
    "116": "https://drive.google.com/file/d/1XiQFA91hgokHRmdgKa_Kg8ssXkZNXZZb/preview",
    "117": "https://drive.google.com/file/d/1Yv_lNDpSy8mjvxjizf6hwBW9WIqjvEM8/preview",
    "118": "https://drive.google.com/file/d/1sDJFVI3GGFLTHdjWEXQiLm-DpYU5IDB8/preview",
    "119": "https://drive.google.com/file/d/1BJSUDXdiXoW_RU0kMn38xslRFOHa5Xm3/preview",
    "120": "https://drive.google.com/file/d/1lLMIUYZcvCZcKhH2C7rT8mIObOYfNbre/preview",
    "121": "https://drive.google.com/file/d/1VyHy6CsM_mpaKdoo3dYpo58p7rHjmmrF/preview",
    "122": "https://drive.google.com/file/d/1PqFhDZPw9llDW6lBYVe8Pff8jYCGPxaI/preview",
    "123.5": "https://drive.google.com/file/d/1lTWj5hSPdZekoN8Sij11HFiJ1yCNe1TX/preview",
    "123": "https://drive.google.com/file/d/1XxoMBsaErE3OBRLst8DyF4espzmMbVQa/preview",
    "124": "https://drive.google.com/file/d/1gOImtNVVz2ofC58jDOEidsA6IihaYmBp/preview",
    "125.5": "https://drive.google.com/file/d/1o5GG6kWsmmKu46Nz3mLX3kVowoEwYi76/preview",
    "125.8": "https://drive.google.com/file/d/1XULhY2WfjqZ51sHU6NafTqWTQRZ9m9Pe/preview",
    "126": "https://drive.google.com/file/d/1xm3ZKLmW3hgcjmpI3rCD4U77qaGZfKNX/preview",
    "127": "https://drive.google.com/file/d/10xqHgJ2jaWON8SD040M4uZxmAxMWBTlb/preview",
    "128": "https://drive.google.com/file/d/1iYK4YAI3ANN9uwN1DFeR3tm-3bv_lJrC/preview",
    "129": "https://drive.google.com/file/d/1AD1dMAVoc5AaZT4CbyiPYhXbYTJpDKIP/preview",
    "130": "https://drive.google.com/file/d/1jUyDRL3BAyUqVvzFg2hhche-sOVzUuhn/preview",
    "131": "https://drive.google.com/file/d/1HEvyBdzTkJvHCEbDvDkQzjen7bC0dwCX/preview",
    "132": "https://drive.google.com/file/d/1e_eqJNNzm_dUAuAgSxT8cIVbCxMZJJBF/preview",
    "133.5": "https://drive.google.com/file/d/1T56PIZgC7mce1Yd6R02g9G4m4B-ZPo7v/preview",
    "133": "https://drive.google.com/file/d/1IDI78NIPtnnpC1qNCuT9WFDu3amRGMTB/preview",
    "134": "https://drive.google.com/file/d/1eKsdp5C99IRh3HIb_NrIs3NgrTqe8VGX/preview",
    "135": "https://drive.google.com/file/d/1fI2sWrGPL6nxtalVp9c4HHILTIy5wQfq/preview",
    "136": "https://drive.google.com/file/d/1I6jHzg-kf43jXlnG6cnbIou__b8xwG1A/preview",
    "137": "https://drive.google.com/file/d/1-S7vRPxmkjvzIaqS_FwxDvwCjqVST7MI/preview",
    "138.5": "https://drive.google.com/file/d/1Ivje8dFJXEUCfG3d9yELf5vVKzG1c_Qs/preview",
    "138": "https://drive.google.com/file/d/1S1-SOqFrlVVsMOcTCjSmJPKUi99FOFLR/preview",
    "139": "https://drive.google.com/file/d/1a4BIxHn5iJztA99-XZfGsCRWjpX2PZG-/preview",
    "140": "https://drive.google.com/file/d/191m3uuB_G9boNuuegTBaxkPYGKKhDn82/preview",
    "141": "https://drive.google.com/file/d/1ItS-RjDUmcaaGbm8IyN8ZubQkRk3RHUb/preview",
    "142": "https://drive.google.com/file/d/13ND56Mjp7hdEByMQSv6PoDlij_w14Ezg/preview",
    "143": "https://drive.google.com/file/d/1LoUlh_hUkEgX606CMvM0VX2Agy2BHmJq/preview",
    "144": "https://drive.google.com/file/d/1c1keSTflGJkGfOx-gEgPlsyZaStaPfo8/preview",
    "145": "https://drive.google.com/file/d/1Jgc2HEH7nUGoDH67nn96fBPXLQv62ILU/preview",
    "146": "https://drive.google.com/file/d/1TpkolMv6jMJohw4vw9kHobAzEjbifz-T/preview",
    "147": "https://drive.google.com/file/d/1rto8Qk_G3UalzLx8_YvrMQsHeuHgfEw8/preview",
    "148": "https://drive.google.com/file/d/1C3zOuJvbrIPwwp3DEHA5uQxKS_XydwVA/preview",
    "149": "https://drive.google.com/file/d/1Ue6XXmEVh92j-JwQFiZaxlfJDlBQUmd1/preview",
    "150": "https://drive.google.com/file/d/1v3cgIFXPEEmFEqYoiS2inneAnw6mvyLE/preview",
    "151": "https://drive.google.com/file/d/1aToB5IZe3KOGlq0JBxRj81Tw0RcLc4XN/preview",
    "152": "https://drive.google.com/file/d/1Hges8tK7LlaXkA-8BdprKM-xY2g4Rrf4/preview",
    "153": "https://drive.google.com/file/d/1PvmH2aUGpQMr_-TKQ4zTu9fh5OljbsVp/preview"
};