var selectedRows = [];

function selectRow(row, type)
{
    switch(type){
        case 'single':
            selectSingleRow(row);
            break;
        case 'multi':
            selectMultiRow(row);
            break;
    }

    if(selectedRows.length == $('.table tbody tr').length){
        $('#allRowsCheck').prop('checked', true);
    }
    else{
        $('#allRowsCheck').prop('checked', false);
    }
}

function selectSingleRow(row)
{
    $(row).addClass('highlight').siblings().removeClass('highlight');
    $(row).siblings().find('.selectCheck').prop('checked', false);
    $(row).find('.selectCheck').prop('checked', true);

    selectedRows = [];
    selectedRows.push(row);
}

function selectMultiRow(row)
{
    if($(row).hasClass('highlight'))
    {
        $(row).removeClass('highlight');
        selectedRows.splice(selectedRows.indexOf(row), 1);
        $(row).find('.selectCheck').prop('checked', false);
        return;
    }

    $(row).addClass('highlight');
    $(row).find('.selectCheck').prop('checked', true);
    selectedRows.push(row);
}

function selectAllRows()
{
    var rows = $('.table tbody tr');
    
    if(selectedRows.length == rows.length)
    {
        rows.removeClass('highlight');
        rows.find('.selectCheck').prop('checked', false);
        $('#allRowsCheck').prop('checked', false);

        selectedRows = [];
        console.log('selectedRows: ', selectedRows);
        return;
    }
    
    rows.addClass('highlight');
    rows.find('.selectCheck').prop('checked', true);
    $('#allRowsCheck').prop('checked', true);

    rows.each(function(){
        if(selectedRows.indexOf(this) == -1){
            selectedRows.push(this);
        }
    });
}

function openDataScreen(){
    $('#customerModal').modal('show');
    updateCustomerModal();
}

function updateCustomerModal(){

}
