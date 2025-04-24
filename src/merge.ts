export function merge(collection_1: number[], collection_2: number[], collection_3: number[]) :number[]
{
    let a1 = 0;
    let a3 = 0;
    let a2 = collection_2.length-1;
    let endCol1 = false;
    let endCol2 = false;
    let endCol3 = false;
    const merge :number[] = [];

    // check list empty ?
    if (collection_1.length == 0 ) { 
        endCol1 = true
        collection_1.push(Infinity)
    } 
    if (collection_2.length == 0 ) { 
        endCol2 = true
        collection_2.push(Infinity)
    } 
    if (collection_3.length == 0 ) { 
        endCol3 = true
        collection_3.push(Infinity)
    } 
    // merge array1 , array 2 and array3
    while(!(endCol1 && endCol2 && endCol3)){
       let minNumber = Math.min(collection_1[a1] , collection_2[a2] , collection_3[a3])
       if (minNumber === collection_1[a1])
        {
            merge.push(collection_1[a1])
            // เป็นตัว สุดท้ายพอดี
            if(a1 === collection_1.length - 1){
                endCol1 = true;
                collection_1[a1] = Infinity;
                continue;
            }
            a1++;
        }else if(minNumber === collection_2[a2]){
            // เป็น ตัวท้าย
            merge.push(collection_2[a2])
            if(a2 === 0){
                endCol2 = true;
                collection_2[a2] =  Infinity;
                continue;
            }
            a2--;
        }else{
            merge.push(collection_3[a3])
            //ตัวท้าย collection 3
            if(a3 === collection_3.length - 1){
                endCol3 = true;
                collection_3[a3] = Infinity
                continue
            }
            a3++;
        }
    }
    return merge
}