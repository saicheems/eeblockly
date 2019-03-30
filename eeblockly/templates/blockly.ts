export const BLOCKS_JSON = [
{% for group, blocks in all_groups|dictsort %}
{% for type, block in blocks|dictsort %}
    {{json.dumps(block, sort_keys=True)}}{{"," if not loop.last}}
{% endfor %}
{% endfor %}
];
